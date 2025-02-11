pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/KartikAdlakhia/Decentralized_voting_system.git', branch: 'kartik-dev'
            }
        }
     stage('Build') {
            steps {
                bat 'echo Building...'
                // Or use powershell for PowerShell commands
                powershell 'Write-Output "Building..."'
            }
        }
        stage('Test') {
            steps {
                bat 'echo Testing...'
            }
        }
        stage('Deploy') {
            steps {
                bat 'echo Deploying...'
            }
        }
    }
}

