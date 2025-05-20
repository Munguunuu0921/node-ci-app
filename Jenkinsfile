pipeline {
    agent any

    stages {
        stage('Clone from GitHub') {
            steps {
                git 'https://github.com/Mungunuu0921/node-ci-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("node-ci-app")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker stop node-ci-app || true"
                    sh "docker rm node-ci-app || true"
                    sh "docker run -d -p 3000:3000 --name node-ci-app node-ci-app"
                }
            }
        }
    }
}
