

# URL Shortener Microservices Platform

A production-ready URL Shortener application built using three microservices (Go, Python, Node.js), deployed on Kubernetes with full CI/CD and GitOps automation.

---

## Overview

This project demonstrates a complete end-to-end DevOps workflow, including:

- Multi-service microservices architecture
- Redis caching layer
- Docker-based containerization
- CI pipelines using GitHub Actions
- SonarQube static analysis with Quality Gates
- DockerHub image publishing
- GitOps deployment using Kustomize and Argo CD
- Kubernetes deployments with autoscaling and ingress
- Monitoring using Prometheus and Grafana

---

## Architecture Diagram

<img width="1920" height="1080" alt="Architectural Diagram" src="https://github.com/user-attachments/assets/df460549-9610-4e18-8876-e0a920bd42b0" />

---

## Microservices

### 1. Python Service
- Acts as the main entrypoint for user requests.
- Generates short URLs.
- Communicates with Go and Node services internally.
- Uses Redis for caching.

### 2. Go Service
- Handles URL redirection.
- Performs analytics-related logic.
- Interacts with Python and Redis.

### 3. Node.js Service
- Validates long URLs.
- Performs preprocessing and metadata handling.
- Communicates with Python service.

### 4. Redis Cache
- Shared caching system across all microservices.

---

## Repository Structure

urlshortener-microservice/
│
├── go-service/
│ ├── main.go
│ ├── Dockerfile
│
├── python-service/
│ ├── app.py
│ ├── Dockerfile
│
├── node-service/
│ ├── index.js
│ ├── Dockerfile
│
├── k8s/
│ ├── deployments/
│ ├── services/
│ ├── ingress/
│ ├── hpa/
│ └── redis/
│
├── .github/workflows/
│ ├── go-ci.yml
│ ├── python-ci.yml
│ ├── node-ci.yml
│
└── README.md


---

## CI and CD Pipeline

### Continuous Integration (GitHub Actions)

Each microservice has its own dedicated CI pipeline that:

- Installs dependencies
- Runs static analysis using SonarQube
- Enforces Quality Gates
- Builds Docker images
- Pushes images to DockerHub

### Continuous Deployment (GitOps)

- Kubernetes manifests are stored in a GitOps repository.
- Kustomize patches update image versions.
- Argo CD continuously synchronizes desired state into the Kubernetes cluster.

---

## Kubernetes Deployment

### Components Used

- Deployments for microservices
- Services (ClusterIP) for internal communication
- Horizontal Pod Autoscalers for scaling
- NGINX Ingress Controller for routing
- Persistent Volume Claims for Redis (optional)
- ConfigMaps and Secrets (optional)

### Deploy all resources



kubectl apply -f k8s/


### Verify running workloads



kubectl get pods
kubectl get svc
kubectl get hpa


### Access the application

Add this entry to your local hosts file:



127.0.0.1 urlshortener.local


Then open:



http://urlshortener.local


---

## Monitoring Stack

### Node Exporter
Collects node-level metrics.

### Prometheus
Scrapes and stores metrics.

### Grafana
Provides dashboards and visualizations.

---



### Clone the repository



git clone https://github.com/Habib0905/urlshortener-microservice

cd urlshortener-microservice




### Build Docker image



docker build -t python-service .


---

## Future Enhancements

- Add PostgreSQL as a persistent datastore
- Add canary deployments using Argo Rollouts

---

## Author

Habib Hussain  
DevOps Engineer

---

## License

This project is open source and free to use.

