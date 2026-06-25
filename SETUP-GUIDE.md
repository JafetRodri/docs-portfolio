# API Reference: Current Weather

Retrieve current weather conditions for a city by name. This sample documents a real, publicly available REST endpoint to demonstrate API reference structure: resource description, authentication, parameters, request and response examples, field definitions, and error handling.

!!! note "About this sample"
    This page documents the public OpenWeatherMap *Current Weather* endpoint. It is written from the perspective of a developer integrating the API for the first time. An API key is required to call the live endpoint.

## Endpoint

```
GET https://api.openweathermap.org/data/2.5/weather
```

Returns current weather data for one location, including temperature, conditions, wind, and humidity.

## Authentication

All requests require an API key passed as the `appid` query parameter. Requests without a valid key return `401 Unauthorized`.

## Query parameters

| Parameter | Type | Required | Description |
|---|---|---|---|
| `q` | string | Yes¹ | City name, optionally with state and country code: `q=London,uk`. |
| `appid` | string | Yes | Your API key. |
| `units` | string | No | Units of measurement: `standard` (Kelvin, default), `metric` (Celsius), or `imperial` (Fahrenheit). |
| `lang` | string | No | Language code for the weather `description` field, e.g. `es`, `fr`. |

¹ Location may alternatively be specified by coordinates (`lat`/`lon`) or `zip`. This reference covers the city-name method.

## Example request

```bash
curl "https://api.openweathermap.org/data/2.5/weather?q=Tegucigalpa&units=metric&appid=YOUR_API_KEY"
```

## Example response

A successful request returns `200 OK` with a JSON body:

```json
{
  "weather": [
    {
      "main": "Clouds",
      "description": "scattered clouds"
    }
  ],
  "main": {
    "temp": 24.6,
    "feels_like": 24.9,
    "humidity": 65,
    "pressure": 1014
  },
  "wind": {
    "speed": 3.6,
    "deg": 90
  },
  "name": "Tegucigalpa",
  "cod": 200
}
```

## Response fields

| Field | Type | Description |
|---|---|---|
| `weather[].main` | string | Group of weather parameters (Rain, Snow, Clouds, etc.). |
| `weather[].description` | string | Human-readable condition, localized by `lang`. |
| `main.temp` | number | Current temperature, in the requested `units`. |
| `main.feels_like` | number | Perceived temperature accounting for wind and humidity. |
| `main.humidity` | number | Humidity, as a percentage. |
| `wind.speed` | number | Wind speed, in the requested `units`. |
| `name` | string | Resolved location name. |
| `cod` | number | Internal response code (`200` on success). |

## Error responses

| Status | Meaning | Common cause |
|---|---|---|
| `401 Unauthorized` | Invalid or missing API key. | `appid` omitted or incorrect. |
| `404 Not Found` | Location not found. | Misspelled city name or unsupported query. |
| `429 Too Many Requests` | Rate limit exceeded. | Call volume above your plan's allowance. |

Error responses return a JSON body with a `cod` and a `message` describing the problem:

```json
{
  "cod": "404",
  "message": "city not found"
}
```

## Notes

- The free plan enforces a per-minute call limit. Cache responses where possible to stay within quota.
- Weather data is updated periodically rather than in real time; expect values to reflect the most recent observation, not the current instant.
