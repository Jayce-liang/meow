import React from "react";
import "./Header.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import SearchIcon from "@mui/icons-material/Search";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

// mui 消息框
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Header() {
  // 表单值
  const keyword = React.useRef();
  // 消息框
  const [open, setOpen] = React.useState(false);

  const vertical = "bottom";
  const horizontal = "left";
  const handleAlertClick = () => {
    setOpen(true);
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // 提交表单
  function submit(e) {
    e.stopPropagation();
    e.preventDefault();
    const value = keyword.current.value;
    if (!value) {
      handleAlertClick();
    }
  }
  return (
    <div className="Header">
      {/* logo */}
      <div className="logo-container">
        <img className="logo" src="logo.png" alt="logo" />
      </div>
      {/* search */}
      <div className="search-container">
        <form className="search-form" onSubmit={submit}>
          <input
            type="text"
            className="search-input"
            name="keyword"
            autoComplete="off"
            placeholder="🌈 想看啥"
            ref={keyword}
          />
          <button type="submit" className="btn-search">
            <SearchIcon sx={{ color: "red", fontSize: 25 }} />
          </button>
        </form>
      </div>
      {/* history */}
      <div className="history">
        <AccessTimeOutlinedIcon
          sx={{ color: "grey", fontSize: 20 }}
        ></AccessTimeOutlinedIcon>
        <span>观看记录</span>
      </div>

      {/* 消息框提示 */}
      {/* <Stack spacing={2} sx={{ width: "100%" }}> */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleAlertClose}
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleAlertClose}
          severity="warning"
          sx={{ width: "100%" }}
        >
          搜索值不能为空!
        </Alert>
      </Snackbar>
      {/* </Stack> */}
    </div>
  );
}
