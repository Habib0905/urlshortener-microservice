🚀 URL Shortener Microservices Platform

A production-ready, Kubernetes-based microservices application using GitOps, CI/CD, centralized caching, and auto-scaling.

📌 Overview

This project implements a URL Shortener application architected as a microservices platform, built with:

Go Service — Core redirection + analytics

Python Service — URL generation & API gateway

Node.js Service — URL validation & metadata

Redis — Shared caching layer

Kubernetes — Deployment, scaling, routing

Argo CD — GitOps-based automated deployment

SonarQube — Code quality and static analysis

DockerHub — Image registry

Prometheus & Grafana — Monitoring & alerting

The platform is designed with real-world DevOps practices including containerization, CI/CD, autoscaling, and ingress traffic routing.

🏗️ Architecture Diagram

<img width="1920" height="1080" alt="Architectural Diagram" src="https://github.com/user-attachments/assets/df460549-9610-4e18-8876-e0a920bd42b0" />

🔧 Microservices
1️⃣ Python Service

Acts as the main entrypoint for API requests

Generates shortened URLs

Communicates with Go and Node services

Uses Redis for caching

2️⃣ Go Service

Performs URL redirection

Handles analytics logic

Reads cached keys from Redis

Exposes lightweight, fast endpoints

3️⃣ Node.js Service

Validates long URLs

Extracts metadata or performs preprocessing

Communicates with the Python service

4️⃣ Redis Service

Shared in-memory caching for all services

Stores URL mappings and frequently accessed values

🐳 Containerization (Docker)

Each service includes a Dockerfile:

go-service/
python-service/
node-service/
redis/ (optional)


Images are built and pushed to DockerHub via GitHub Actions CI.

☸️ Kubernetes Deployment (K8s)
Kubernetes components used:

Deployment for each microservice

Service (ClusterIP) per microservice

HorizontalPodAutoscaler (HPA)

PersistentVolumeClaim (if Redis is persistence-enabled)

ConfigMaps & Secrets (optional)

NGINX Ingress

Ingress Routing

All requests to:

http://urlshortener.local


are routed to the Python service, which internally communicates with Go and Node services.

Auto-scaling

Each service has an HPA configured based on CPU usage.

🔁 CI/CD Pipeline
🔍 1. Code pushed to GitHub

Triggers CI workflow for Go, Python, Node services.

🧪 2. SonarQube Code Quality Check

Each service:

Runs static code analysis

Sends report to SonarQube server

Pipeline waits for Quality Gate to pass

🛠️ 3. Build & Push Docker Images

Images are built using Docker buildx and pushed to DockerHub:
Example image names:

habib0905/go-service:latest
habib0905/python-service:latest
habib0905/node-service:latest

🚀 4. Continuous Deployment with Argo CD

Argo CD continuously watches the manifest repo and syncs changes automatically to the cluster:

Deployments

Services

HPAs

Ingress

Redis

This ensures full GitOps automation.

📊 Monitoring Stack
Prometheus

Scrapes metrics from Kubernetes components

Pulls service metrics (if instrumented)

Used by HPAs for autoscaling

Grafana

Visual dashboards for:

Service health

Request latency

CPU/memory usage

Pod scaling behavior

Redis performance

Monitoring components run inside the cluster.

📂 Repository Structure
urlshortener-microservice/
│
├── go-service/
│   ├── main.go
│   ├── Dockerfile
│   └── ...
│
├── python-service/
│   ├── app.py
│   ├── Dockerfile
│   └── ...
│
├── node-service/
│   ├── index.js
│   ├── Dockerfile
│   └── ...
│
├── k8s/
│   ├── deployments/
│   ├── services/
│   ├── ingress/
│   ├── hpa/
│   └── redis/
│
├── argo-apps/   (optional GitOps folder)
│
├── .github/workflows/
│   ├── go-ci.yml
│   ├── python-ci.yml
│   ├── node-ci.yml
│
└── README.md

🚀 Local Development
1. Clone the repo
git clone https://github.com/Habib0905/urlshortener-microservice
cd urlshortener-microservice

2. Run individual services locally (example: Python)
cd python-service
pip install -r requirements.txt
python app.py

3. Build a Docker image
docker build -t python-service .

☸️ Deploy to Kubernetes
Apply manifests:
kubectl apply -f k8s/

Verify pods:
kubectl get pods

Access via Ingress:

Add to /etc/hosts:

127.0.0.1   urlshortener.local


Then open:

http://urlshortener.local

🧩 Future Enhancements

Canary deployments with Argo Rollouts

👤 Author

Habib Hussain
DevOps Engineer
LinkedIn: https://www.linkedin.com/in/habib-hussain-402250242/

⭐ If this project helped you, consider giving it a star!

Your support means a lot! 🌟
