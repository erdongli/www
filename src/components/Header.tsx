import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Stack from "@mui/material/Stack";

const tabs: { label: string; path: string }[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Projects",
    path: "/projects",
  },
];

export function Header() {
  const location = useLocation();
  const [value, setValue] = useState(
    tabs.findIndex((tab) => tab.path === location.pathname)
  );

  return (
    <Stack direction="row" justifyContent="end">
      <Tabs
        value={value}
        centered
        aria-label="header"
        onChange={(_, value) => setValue(value)}
        TabIndicatorProps={{
          children: <span className="MuiTabs-indicatorSpan" />,
        }}
        sx={{
          "& .MuiTabs-indicator": {
            display: "flex",
            justifyContent: "center",
            backgroundColor: "transparent",
          },
          "& .MuiTabs-indicatorSpan": {
            maxWidth: 40,
            width: "100%",
            backgroundColor: "black",
          },
        }}
      >
        {tabs.map((tab) => (
          <Tab
            label={tab.label}
            component={Link}
            to={tab.path}
            sx={{
              textTransform: "none",
              fontSize: "25px",
              fontWeight: "normal",
              color: "black",
              "&.Mui-selected": {
                color: "black",
              },
            }}
          />
        ))}
      </Tabs>
    </Stack>
  );
}
