resource "hcloud_server" "radio_node" {
  name        = "radio-node"
  image       = "debian-13"
  server_type = "ccx13"
  location    = "ash" // us-east

  ssh_keys = [
    hcloud_ssh_key.main.id
  ]

  firewall_ids = [
    hcloud_firewall.radio_firewall.id
  ]

  public_net {
    ipv4_enabled = true
    ipv6_enabled = true
  }
}

resource "hcloud_firewall" "radio_firewall" {
  name = "radio-firewall"

  rule {
    direction = "in"
    protocol  = "icmp"
    source_ips = [
      "0.0.0.0/0",
      "::/0"
    ]
  }

  rule {
    direction = "in"
    protocol  = "tcp"
    port      = "22"
    source_ips = [
      "0.0.0.0/0"
    ]
  }

  rule {
    direction = "in"
    protocol  = "tcp"
    port      = "80"
    source_ips = [
      "0.0.0.0/0",
      "::/0"
    ]
  }

  rule {
    direction = "in"
    protocol  = "tcp"
    port      = "443"
    source_ips = [
      "0.0.0.0/0",
      "::/0"
    ]
  }
}

resource "hcloud_ssh_key" "main" {
  name       = "ssh-key"
  public_key = file(var.ssh_key_path)
}
