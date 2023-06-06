pipeline {
    agent any

    stages {
        stage ('Generate Changelog') {
			when {
				expression { return gitInfo.GIT_PREVIOUS_SUCCESSFUL_COMMIT!=gitInfo.GIT_COMMIT }
			}
            steps {
				script {
					if(gitInfo.GIT_PREVIOUS_SUCCESSFUL_COMMIT==null)
						env.CHANGE_LOG = gitChangelog returnType: 'STRING', template: getChangeLogTemplate()
					else
						env.CHANGE_LOG = gitChangelog returnType: 'STRING', template: getChangeLogTemplate(),
							from: [type: 'COMMIT', value: "${gitInfo.GIT_PREVIOUS_SUCCESSFUL_COMMIT}"],
							to: [type: 'COMMIT', value: "${gitInfo.GIT_COMMIT}"]
					echo "change log=${env.CHANGE_LOG}"
				}
            }
        }
        stage('Build') {
            steps {
                sh "npm install"
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