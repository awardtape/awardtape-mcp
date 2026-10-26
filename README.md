# awardtape-mcp — Defense Contracts, Power Grid & Supply-Chain Compliance MCP Server

Remote & local `stdio` Model Context Protocol (MCP) server for **[AwardTape](https://awardtape.com)**, operated by **Datil Technologies Inc.** (66 West Flagler Street, Suite 900, PMB 12079, Miami, FL 33144).

## Instant Remote Connection (Zero Install)
```json
{
  "mcpServers": {
    "awardtape": {
      "url": "https://awardtape.com/api/mcp"
    }
  }
}
```

## Local Stdio Bridge (via npx)
```json
{
  "mcpServers": {
    "awardtape": {
      "command": "npx",
      "args": ["-y", "awardtape-mcp"],
      "env": {
        "AWARDTAPE_API_KEY": "atk_optional_paid_pass_key"
      }
    }
  }
}
```

## Exposed MCP Tools
1. `search_defense_awards` — Search 10.64M+ US DoW/Pentagon contract obligations, 5 PM Pentagon releases, and 78 allied country procurement feeds by contractor, `$TICKER`, PIID, NAICS, PSC/FSC, or capability lens.
2. `get_contractor_entity` — Retrieve a contractor entity dossier (`UEI`, `CAGE`, parent `$TICKER`, obligations, active IDIQ vehicle seats, expiring recompetes, and bidirectional `SPLC` supply-chain links).
3. `list_recompetes` — Query expiring incumbent defense contracts (6–18 month recompete window) with incumbent vulnerability scores and FOIA SOW/J&A retrieval links.
4. `search_power_grid_queue` — Search US ISO/RTO generator & data-center interconnection queues (`PJM`, `ERCOT`, `CAISO`, `MISO`, `SPP`, `NYISO`, `ISO-NE`) and HV transformer bottlenecks.
5. `screen_supplier_compliance` — Screen manufacturers and entities against `BIS Entity List`, `OFAC SDN`, `UFLPA`, `DoD 1260H`, and `FDA/CBP Port Refusals` with verified clean allied replacement primes.
6. `export_custom_ontology_dataset` — Export custom relational cuts across `entities`, `instruments`, `recompetes`, `allied`, `grid`, and `compliance` in `CSV`, `JSON`, `JSONL`, or `Markdown`.
