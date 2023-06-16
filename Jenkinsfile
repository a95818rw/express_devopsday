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
                sh "docker push a95818rw/expressdevopsday:${env.now}"
            }
        }
        stage('Deploy') {
            environment {
                now = getTodayString()
            }
            steps {
                sh "git clone https://github.com/a95818rw/kube_config_devopsday.git"
                sh "helm upgrade express --debug ./kube_config_devopsday --set image.tag=${env.now}"
            }
        }
    }
}

def getTodayString() {
	return Calendar.getInstance().getTime().format('yyyyMMddHHmm', TimeZone.getTimeZone('Asia/Taipei'))
}