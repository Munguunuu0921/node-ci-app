pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:$PATH"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-ci-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    docker stop node-ci-app || true
                    docker rm node-ci-app || true
                    docker run -d -p 3001:3000 --name node-ci-app node-ci-app
                '''
            }
        }
    }
}
