output "server_ipv4" {
  value = hcloud_server.radio_node.ipv4_address
}

output "server_ipv6" {
  value = hcloud_server.radio_node.ipv6_address
}
