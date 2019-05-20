import React from "react";
import { Grid } from "@material-ui/core";
import Feature from "./components/Feature";
import Attack from "./components/Attack";
import Packet from "./components/Packet";

// 'attack_type'

class App extends React.Component {
  state = {
    features: {
      categorical: [
        {
          title: "protocol_type",
          values: ["tcp", "udp", "icmp"],
          placeholder: "tcp"
        },
        {
          title: "service",
          values: [
            "http",
            "finger",
            "discard",
            "systat",
            "aol",
            "supdup",
            "printer",
            "nntp",
            "kshell",
            "domain",
            "netbios_ns",
            "netstat",
            "imap4",
            "netbios_dgm",
            "whois",
            "nnsp",
            "http_443",
            "netbios_ssn",
            "pm_dump",
            "eco_i",
            "red_i",
            "ecr_i",
            "vmnet",
            "tim_i",
            "smtp",
            "urh_i",
            "tftp_u",
            "ctf",
            "iso_tsap",
            "hostnames",
            "link",
            "time",
            "telnet",
            "pop_3",
            "urp_i",
            "csnet_ns",
            "rje",
            "bgp",
            "gopher",
            "uucp",
            "other",
            "echo",
            "klogin",
            "http_2784",
            "IRC",
            "shell",
            "http",
            "domain_u",
            "mtp",
            "X11",
            "login",
            "ssh",
            "ntp_u",
            "remote_job",
            "private",
            "daytime",
            "pop_2",
            "uucp_path",
            "harvest",
            "exec",
            "auth",
            "ftp_data",
            "ftp",
            "efs",
            "courier",
            "sunrpc",
            "Z39_50",
            "name",
            "http_8001",
            "sql_net",
            "ldap"
          ],
          placeholder: "http"
        },
        {
          title: "flag",
          values: [
            "SF",
            "S3",
            "RSTR",
            "RSTOS0",
            "S0",
            "S1",
            "RSTO",
            "OTH",
            "S2",
            "SH",
            "REJ",
            "SF"
          ],
          placeholder: "SF"
        }
      ],
      numerical: {
        titles: [
          {
            string: "duration",
            placeholder: "0"
          },
          {
            string: "src_bytes",
            placeholder: "255"
          },
          {
            string: "dst_bytes",
            placeholder: "255"
          },
          {
            string: "land",
            placeholder: "0"
          },
          {
            string: "wrong_fragment",
            placeholder: "0.2"
          },
          {
            string: "urgent",
            placeholder: "0.3"
          },
          {
            string: "hot",
            placeholder: "0.4"
          },
          {
            string: "num_failed_logins",
            placeholder: "0.5"
          },
          {
            string: "logged_in",
            placeholder: "1"
          },
          {
            string: "num_compromised",
            placeholder: "0.6"
          },
          {
            string: "root_shell",
            placeholder: "0.7"
          },
          {
            string: "su_attempted",
            placeholder: "0.8"
          },
          {
            string: "num_root",
            placeholder: "0.9"
          },
          {
            string: "num_file_creations",
            placeholder: "0.10"
          },
          {
            string: "num_shells",
            placeholder: "0.11"
          },

          {
            string: "num_access_files",
            placeholder: "0.12"
          },
          {
            string: "num_outbound_cmds",
            placeholder: "0.13"
          },
          {
            string: "is_host_login",
            placeholder: "0.14"
          },
          {
            string: "is_guest_login",
            placeholder: "0.15"
          },
          {
            string: "count",
            placeholder: "1.1"
          },
          {
            string: "srv_count",
            placeholder: "1.2"
          },
          {
            string: "serror_rate",
            placeholder: "0.00"
          },
          {
            string: "srv_serror_rate",
            placeholder: "0.00.1"
          },
          {
            string: "rerror_rate",
            placeholder: "0.00.2"
          },
          {
            string: "srv_rerror_rate",
            placeholder: "0.00.3"
          },
          {
            string: "same_srv_rate",
            placeholder: "1.00"
          },
          {
            string: "diff_srv_rate",
            placeholder: "0.00.4"
          },
          {
            string: "srv_diff_host_rate",
            placeholder: "0.00.5"
          },
          {
            string: "dst_host_count",
            placeholder: "0.16"
          },
          {
            string: "dst_host_srv_count",
            placeholder: "0.17"
          },
          {
            string: "dst_host_same_srv_rate",
            placeholder: "0.00.6"
          },
          {
            string: "dst_host_diff_srv_rate",
            placeholder: "0.00.7"
          },
          {
            string: "dst_host_same_src_port_rate",
            placeholder: "0.00.8"
          },
          {
            string: "dst_host_srv_diff_host_rate",
            placeholder: "0.00.9"
          },
          {
            string: "dst_host_serror_rate",
            placeholder: "0.00.10"
          },
          {
            string: "dst_host_srv_serror_rate",
            placeholder: "0.00.11"
          },
          {
            string: "dst_host_rerror_rate",
            placeholder: "0.00.12"
          },
          {
            string: "dst_host_srv_rerror_rate",
            placeholder: "0.00.13"
          }
        ],
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "..."]
      }
    }
  };

  handleCSVChange = features => {
    // Get the categories and numerics from features
    const cats = features.slice(1, 4);
    const nums = features.slice(0, 1).concat(features.slice(4));

    let this_cats = [...this.state.features.categorical];
    let this_nums = [...this.state.features.numerical.titles];

    // Set states
    this_nums.map((title, i) => {
      title.placeholder = nums[i];
      return title;
    });
    this_cats.map((cat, i) => {
      cat.placeholder = cats[i];
      return cat;
    });
    this.setState(this_cats);
    this.setState(this_nums);
  };

  handleFeatureChange = feature => {
    let this_nums = [...this.state.features.numerical.titles];
    let this_cats = [...this.state.features.categorical];
    this_nums.map(title => {
      if (title.string === feature.name) {
        title.placeholder = feature.value;
      }
      return title;
    });
    this_cats.map(cat => {
      if (cat.title === feature.name) {
        cat.placeholder = feature.value;
      }
      return cat;
    });
    this.setState(this_nums);
    this.setState(this_cats);
  };

  render() {
    const { features } = this.state;
    return (
      <div className="App">
        <Grid container justify="center" spacing={36}>
          <Packet features={features} onCSVChange={this.handleCSVChange} />
          Or
          <Feature
            features={features}
            onFeatureChange={this.handleFeatureChange}
          />
          <div style={{ padding: "30px" }}>
            <Attack features={features} />
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
