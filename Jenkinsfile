pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/KartikAdlakhia/Decentralized_voting_system/tree/kartik-dev', branch: 'kartik-dev'
            }
        }
        
        stage('Build') {
            steps {
                sh 'mvn clean install' // Change to your build command
            }
        }

        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
            }
        }
    }
}
 
