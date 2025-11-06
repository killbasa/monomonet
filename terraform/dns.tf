resource "cloudflare_dns_record" "azura_endpoint" {
  zone_id = data.cloudflare_zone.killbasa_com.zone_id
  name    = "azura.${data.cloudflare_zone.killbasa_com.name}"
  content = hcloud_server.radio_node.ipv4_address
  type    = "A"
  ttl     = 1
  proxied = true
}
