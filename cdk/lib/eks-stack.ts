import * as cdk from 'aws-cdk-lib';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import * as eks from 'aws-cdk-lib/aws-eks';

export class EksStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create ECR Repository
    const repository = new ecr.Repository(this, 'IELTSNodeBackend', {
      repositoryName: 'ielts-node-backend',
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });


    // Create EKS Cluster
    const cluster = new eks.Cluster(this, 'IELTSCluster', {
      version: eks.KubernetesVersion.V1_23,
      defaultCapacity: 2,
    });

    // Grant the cluster access to the repository
    repository.grantPull(cluster.role);
  }
}
