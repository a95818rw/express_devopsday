pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh "npm install"
                sh "docker build -t expressdevopsday ."
            }
        }
        stage('Test') {
            steps {
                sh "npm test"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}