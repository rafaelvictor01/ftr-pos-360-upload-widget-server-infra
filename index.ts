import * as aws from "@pulumi/aws";

const bucket = new aws.s3.Bucket("primeiro-bucket", {
  // bucket: "primeiro-bucket-pos-fullstack-360",
  tags: {
    iac: "true"
  }
});

const ecr = new aws.ecr.Repository("primeiro-ecr", {
  // name: "primeiro-ecr-pos-fullstack-360",
  imageTagMutability: "IMMUTABLE",
  tags: {
    iac: "true"
  }
});

export const bucketName = bucket.bucket;
export const bucketRegion = bucket.region;
export const bucketArn = bucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
