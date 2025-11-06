resource "cloudflare_page_rule" "hls_page_rule" {
  zone_id  = data.cloudflare_zone.killbasa_com.zone_id
  target   = "${cloudflare_dns_record.azura_endpoint.name}/hls/*"
  priority = 1
  status   = "active"
  actions = {
    cache_level = "bypass"
  }
}

resource "cloudflare_page_rule" "listen_page_rule" {
  zone_id  = data.cloudflare_zone.killbasa_com.zone_id
  target   = "${cloudflare_dns_record.azura_endpoint.name}/listen/*"
  priority = 2
  status   = "active"
  actions = {
    cache_level = "bypass"
  }
}

resource "cloudflare_page_rule" "radio_page_rule" {
  zone_id  = data.cloudflare_zone.killbasa_com.zone_id
  target   = "${cloudflare_dns_record.azura_endpoint.name}/radio/*"
  priority = 3
  status   = "active"
  actions = {
    cache_level = "bypass"
  }
}
