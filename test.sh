#!/bin/bash
docker build ./test -t reverse-string-test
docker run -it -e APP_URL=$(aws cloudformation describe-stacks --stack-name reverse-string-production --query "Stacks[0].Outputs[?OutputKey=='PublicLoadBalancerDNSName'].OutputValue" --output text) reverse-string-test