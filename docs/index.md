# Standard Operating Procedure: EDR Agent Deployment (Windows)

| | |
|---|---|
| **Document ID** | SAMPLE-SEC-EDR-SOP-001 |
| **Version** | 1.0 |
| **Audience** | Endpoint security administrators |
| **Classification** | Sample / Public |

!!! note "About this sample"
    This SOP documents deployment of a fictional endpoint detection and response (EDR) agent, "Sentinel EDR," on Windows endpoints. It mirrors the structure of production security procedures while containing no proprietary or client information.

## 1. Purpose

This procedure describes how to deploy the Sentinel EDR sensor to a Windows 11 endpoint, verify successful installation, and roll back the deployment if validation fails. It ensures every endpoint is onboarded consistently and is reporting to the management console before being considered protected.

## 2. Scope

This procedure applies to all Windows 10 and Windows 11 workstations managed by the endpoint security team. It does not cover server operating systems or macOS endpoints, which are governed by separate procedures.

## 3. Prerequisites

Before beginning, confirm the following:

- [ ] Administrative rights on the target endpoint
- [ ] The endpoint meets the minimum OS build (Windows 10 21H2 or later)
- [ ] Network connectivity to the Sentinel management console on TCP 443
- [ ] The deployment package (`SentinelInstaller.exe`) and the tenant **Customer ID (CID)**
- [ ] A maintenance window communicated to the endpoint owner

## 4. Procedure

### 4.1 Stage the installer

1. Copy `SentinelInstaller.exe` to a local working directory on the endpoint, for example `C:\Temp\Sentinel`.
2. Confirm the file hash matches the value published in the management console to verify package integrity.

### 4.2 Install the sensor

1. Open an elevated Command Prompt (**Run as administrator**).
2. Run the installer with the tenant CID:

    ```bat
    SentinelInstaller.exe /install /quiet /norestart CID=YOUR_CUSTOMER_ID
    ```

3. Wait for the process to complete. The installer exits silently on success.

!!! warning
    Do not restart the endpoint during installation. A forced restart can leave the sensor in a partially registered state, requiring a full uninstall before reinstalling.

### 4.3 Register with the console

The sensor registers automatically on first network check-in. Allow up to 10 minutes for the endpoint to appear in the management console.

## 5. Verification

Confirm a successful deployment using **both** checks:

1. **Service check** — On the endpoint, confirm the `SentinelSvc` service is running:

    ```bat
    sc query SentinelSvc
    ```

    The `STATE` field should read `RUNNING`.

2. **Console check** — In the Sentinel management console, confirm the endpoint appears under **Host Management** with a status of **Online** and a recent check-in timestamp.

If both checks pass, the endpoint is considered protected. Record the result in the deployment tracker.

## 6. Rollback

If verification fails and cannot be resolved within the maintenance window:

1. Open an elevated Command Prompt.
2. Uninstall the sensor:

    ```bat
    SentinelInstaller.exe /uninstall /quiet
    ```

3. Restart the endpoint.
4. Confirm the `SentinelSvc` service is no longer present.
5. Document the failure and escalate to the security engineering team with the installer logs from `C:\Temp\Sentinel`.

## 7. Revision history

| Version | Date | Author | Change |
|---|---|---|---|
| 1.0 | 2026-06-24 | J. Rodríguez | Initial release |
