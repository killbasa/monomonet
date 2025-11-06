terraform {
  required_version = ">= 1.13.3"

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 5.12"
    }

    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.19"
    }

    hcloud = {
      source  = "hetznercloud/hcloud"
      version = "~> 1.54"
    }
  }

  backend "s3" {
    bucket = "monomonet"
    key    = "tfstate"
    region = "ca-central-1"
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

provider "hcloud" {
  token = var.hcloud_token
}
