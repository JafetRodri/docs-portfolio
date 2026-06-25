name: Deploy Documentation Portfolio

# This runs automatically every time you save a change to your files on GitHub.
# It builds your website and publishes it. You never need to run anything yourself.

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Get the files
        uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: 3.x

      - name: Install the site builder
        run: pip install mkdocs-material

      - name: Build and publish the site
        run: mkdocs gh-deploy --force
