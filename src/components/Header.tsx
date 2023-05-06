import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import { useState } from "react";
import Stack from "@mui/material/Stack";

const tabs: { label: string; to: string }[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Projects",
    to: "/projects",
  },
];

export function Header() {
  const [value, setValue] = useState(0);

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
            to={tab.to}
            sx={{
              textTransform: "none",
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
