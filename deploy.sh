#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status.
# Also treat unset variables as an error.
set -euo pipefail

# --- CONFIGURE THESE VALUES ---
RELEASE_NAME="www"                            # Helm release name
CHART_PATH="./helm"                           # Path to Helm chart
NAMESPACE="www"                               # Namespace to deploy to
# --------------------------------

GIT_SHA=$(git rev-parse --short HEAD)
echo "Current Git SHA: ${GIT_SHA}"

IMAGE="us-central1-docker.pkg.dev/hargow/hargow/www:${GIT_SHA}"

echo "Building Docker image: ${IMAGE}"
docker buildx build --platform=linux/amd64 -t "${IMAGE}" .

echo "Pushing Docker image: ${IMAGE}"
docker push "${IMAGE}"

echo "Deploying with Helm release: ${RELEASE_NAME}, chart: ${CHART_PATH}"
helm upgrade --install \
  "${RELEASE_NAME}" \
  "${CHART_PATH}" \
  --namespace "${NAMESPACE}" \
  --set image="${IMAGE}"

echo "Deployment triggered successfully!"

