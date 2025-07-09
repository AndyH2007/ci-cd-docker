# CI/CD with Docker and GitHub Actions 🐳🚀

This is a simple Node.js app that demonstrates how to:

- Build a Docker image for an app
- Run a GitHub Actions pipeline on push
- Prepare your project for real-world DevOps workflows

## How to Run Locally

```bash
docker build -t ci-cd-example .
docker run -p 3000:3000 ci-cd-example