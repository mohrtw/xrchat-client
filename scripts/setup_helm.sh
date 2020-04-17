set -e
set -x

snap install kubectl --classic

HELM_VERSION=v3.1.0

wget -q https://get.helm.sh/helm-${HELM_VERSION}-linux-amd64.tar.gz -O - | tar -xzO linux-amd64/helm > /usr/local/bin/helm

chmod +x /usr/local/bin/helm

helm init --client-only

helm repo add xrchat https://xrchat.github.io/xrchat-ops/

helm repo update

set +x