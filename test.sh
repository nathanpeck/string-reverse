#!/bin/bash
npm install --prefix test
APP_URL=$(aws cloudformation describe-stacks --stack-name reverse-string-test --query "Stacks[0].Outputs[?OutputKey=='PublicLoadBalancerDNSName'].OutputValue" --output text) npm test --prefix test