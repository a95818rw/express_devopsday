pipeline {
    agent any
    environment {
        now = getTodayString()
    }
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
                sh "docker tag expressdevopsday a95818rw/expressdevopsday:${env.now}"
                sh "docker push a95818rw/expressdevopsday:${env.now}"
            }
        }
        stage('Deploy') {
            steps {
                sh "git clone https://github.com/a95818rw/kube_config_devopsday.git"
                sh "helm upgrade express --debug ./kube_config_devopsday --set image.tag=${env.now}"
                sh "kubectl rollout status deployment express --watch"
            }
        }
    }
}

def getTodayString() {
	return Calendar.getInstance().getTime().format('yyyyMMddHHmm', TimeZone.getTimeZone('Asia/Taipei'))
}