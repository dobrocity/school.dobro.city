import type { RequestHandler } from "@sveltejs/kit"

export const GET: RequestHandler = async () => {
  const content = `# DOBROSCHOOL

NETWORK_PASSPHRASE="Public Global Stellar Network ; September 2015"

SIGNING_KEY="GCSEBNMPITGXAXCXXPGASH3XWV7BHUUQXA4CGGKA6K32SZSQ2DDESCHO"

ACCOUNTS=[
"GCSEBNMPITGXAXCXXPGASH3XWV7BHUUQXA4CGGKA6K32SZSQ2DDESCHO",
]

VERSION="2.5.0"

[[PRINCIPALS]]
name="Rinat Enikeev"
email="rinat@dobro.city"
keybase="programyzer"
telegram="programyzer"

[DOCUMENTATION]
ORG_NAME="School @DoBro Popup City"
ORG_DBA="School @DoBro Popup City"
ORG_URL="https://school.dobro.city"
ORG_LOGO="https://school.dobro.city/favicon.png"
ORG_DESCRIPTION="The School @DoBro Popup City is a place where people can learn about the world."
ORG_GITHUB="dobrocity"
ORG_OFFICIAL_EMAIL="contact@dobro.city"
ORG_SUPPORT_EMAIL="contact@dobro.city"

[[CURRENCIES]]
code="SCHO"
issuer="GCSEBNMPITGXAXCXXPGASH3XWV7BHUUQXA4CGGKA6K32SZSQ2DDESCHO"
status="live"
display_decimals=0
is_asset_anchored=false
name="SCHO"
desc="SCHO is a donation token for the School @DoBro Popup City"
image="https://school.dobro.city/favicon.png"
`

  return new Response(content, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/toml",
    },
  })
}
