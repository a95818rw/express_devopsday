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
            environment {
                now = getTodayString()
            }
            steps {
                sh "docker tag expressdevopsday a95818rw/expressdevopsday:${env.now}"
                sh "docker push a95818rw/expressdevopsday"
            }
        }
    }
}

def getTodayString() {
	return Calendar.getInstance().getTime().format('yyyyMMdd', TimeZone.getTimeZone('Asia/Taipei'))
}