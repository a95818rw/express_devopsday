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
        stage('Upload') {
            steps {
                sh "docker tag expressdevopsday a95818rw/expressdevopsday"
                sh "docker push a95818rw/expressdevopsday"
            }
        }
    }
}