import * as React from "react";
import Link from "@mui/material/Link";
import "../Styles/footer.css";
import { Box, Container, Typography } from "@mui/material";
import DividerLine from "./DividerLine";

export default function Footer() {
  return (
    <>
      <DividerLine />

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 4, sm: 2 },
          py: { xs: 8, sm: 4 },
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <img src="/images/nitaiLogo.png" alt="logo" />
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box
            className="sectionDivider"
            sx={{
              display: " grid",
              alignItems: "start !important",
              gap: "1rem",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "grid",
                flexDirection: "column",
                gap: 1,
                marginRight: { xs: 0, sm: "2rem" },
                mb: { xs: 4, sm: 0 },
              }}
            >
              <Typography
                variant="h2"
                marginTop={7}
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
                }}
              >
                About NITAI TECHNOLOGICAL TRAINING INSTITUTE
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "1vw",
                  mt: 2,
                }}
              >
                <Typography variant="p" sx={{ fontSize: "1.2rem !important" }}>
                  Our mission is to equip candidates with comprehensive
                  knowledge and practical experience in various software
                  technologies. We strive to bridge the gap between theoretical
                  knowledge and real-world applications, empowering individuals
                  to meet the demands of the industry.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                marginRight: { xs: 0, sm: "2rem" },
                mb: { xs: 4, sm: 0 },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  textAlign: "center",
                  color: (theme) =>
                    theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
                }}
                marginTop={7}
              >
                COMPANY OFFICE
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "1vw",
                  mt: 2,
                }}
              >
                <img
                  style={{ width: "20px", height: "20px" }}
                  src="/images/location.png"
                  alt=""
                />
                <Typography variant="p">
                  Odugoudar building, Ramnagar, 1st Main 7th Cross Road, Dharwad
                  580001 KA, INDIA.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  gap: "1vw",
                  alignItems: "center",
                }}
              >
                <Box sx={{ marginRight: { xs: "2rem", sm: "0" } }}>
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src="/images/gmail.png"
                    alt=""
                  />
                </Box>

                <a
                  href="mailto:hr@nitaiinnovations.com"
                  style={{ textDecoration: "none", textTransform: "none" }}
                >
                  enquiry@nitaitechnolabs.in
                </a>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  gap: "1vw",
                  alignItems: "center",
                  mt: 1,
                }}
              >
                <Box sx={{ marginRight: { xs: "2rem", sm: "0" } }}>
                  <img
                    style={{ width: "20px", height: "20px" }}
                    src="/images/call.png"
                    alt=""
                  />
                </Box>

                <a style={{ textDecoration: "none", textTransform: "none" }}>
                  08362442285
                </a>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography
                variant="h2"
                marginTop={7}
                sx={{
                  textAlign: "center",
                  color: (theme) =>
                    theme.palette.mode === "light" ? "#0959AA" : "#50a3f7",
                }}
              >
                BUSINESS HOURS
              </Typography>
              <Typography
                variant="p"
                sx={{
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
              >
                Our support available to help you 24 hours a day, seven days a
                week.
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography variant="p" sx={{ textAlign: "end", mr: 2 }}>
                    Monday - Friday:
                  </Typography>
                  <Typography variant="p" sx={{ textAlign: "end", mr: 2 }}>
                    Saturday:
                  </Typography>
                  <Typography variant="p" sx={{ textAlign: "end", mr: 2 }}>
                    Sunday:
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography variant="p" sx={{ textAlign: "start" }}>
                    9am to 5pm
                  </Typography>
                  <Typography variant="p" sx={{ textAlign: "start" }}>
                    10am to 2pm
                  </Typography>
                  <Typography variant="p" sx={{ textAlign: "start" }}>
                    Closed
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            pt: { xs: 4, sm: 2 },
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <Box>
            <Link
              color="text.secondary"
              href="#"
              sx={{
                marginRight: "1rem",
                color: "text.secondary",
                fontSize: "1rem !important",
              }}
            >
              Copyright © 2024 NITAI TECHNOLOGICAL TRAINING INSTITUTE. All
              Rights Reserved.
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
}
