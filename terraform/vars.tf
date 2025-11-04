variable "cloudflare_account_id" {
  description = "Cloudflare Account ID for Tenshi"
  type        = string
  sensitive   = true
}

variable "cloudflare_dns_api_token" {
  description = "Cloudflare API token for DNS management"
  type        = string
  sensitive   = true
}
