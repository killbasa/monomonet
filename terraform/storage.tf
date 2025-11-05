resource "cloudflare_r2_bucket" "monomonet_bucket" {
  account_id    = var.cloudflare_account_id
  name          = "monomonet"
  location      = "enam" // Eastern North America
  storage_class = "Standard"
}

resource "cloudflare_r2_bucket_cors" "monomonet_bucket_cors" {
  account_id  = var.cloudflare_account_id
  bucket_name = cloudflare_r2_bucket.monomonet_bucket.name

  rules = [{
    expose_headers  = ["Content-Encoding"]
    max_age_seconds = 3600
    allowed = {
      methods = ["GET"]
      origins = ["https://monomonet.com"]
      headers = ["x-requested-by"]
    }
  }]

  depends_on = [cloudflare_r2_bucket.monomonet_bucket]
}

resource "cloudflare_r2_custom_domain" "monomonet_bucket_custom_domain" {
  account_id  = var.cloudflare_account_id
  zone_id     = data.cloudflare_zone.monomonet_com.zone_id
  bucket_name = cloudflare_r2_bucket.monomonet_bucket.name

  domain  = "assets.monomonet.com"
  enabled = true
  min_tls = "1.2"

  depends_on = [cloudflare_r2_bucket.monomonet_bucket]
}
