aws s3 mb s3://sam-code
aws cloudformation package --template-file template.yml --output-template-file sam-template.yml --s3-bucket serverless-plantd-dev-serverlessdeploymentbucket-1a0yaf9hnfk8z
s3 bucket to upload the code and must exist before we run the above command
aws cloudformation deploy --template-file C:\Users\Tringapps\aplify-demo\sam-template.yml --stack-name stack1 --capabilities CAPABILITY_IAM
