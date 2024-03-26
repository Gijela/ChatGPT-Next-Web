import styles from "./gpt4-free.module.scss";
import { IconButton } from "./button";
import { useNavigate } from "react-router-dom";
import { Path } from "../constant";
import CloseIcon from "../icons/close.svg";
import { List } from "./ui-lib";

export function Gpt4Free() {
  const navigate = useNavigate();

  return (
    <div className={styles["gpt4-free"]}>
      <div
        className="window-header"
        style={{ width: "100%", boxSizing: "border-box" }}
        data-tauri-drag-region
      >
        <div className="window-header-title">
          <div className="window-header-main-title">免费 GPT4 模式</div>
        </div>
        <div className="window-actions">
          <div className="window-action-button"></div>
          <div className="window-action-button"></div>
          <div className="window-action-button">
            <IconButton
              icon={<CloseIcon />}
              onClick={() => navigate(Path.Home)}
              bordered
            />
          </div>
        </div>
      </div>

      <div className={styles["gpt4-content"]}>
        <List>
          <div style={{ padding: "10px 20px", boxSizing: "border-box" }}>
            <p>
              扫描下方微信小程序二维码，在「聊天训练营预约报名」中点击「报名」，观看完广告即可解锁
              <span style={{ color: "#f63", fontWeight: 500 }}>
                &nbsp;30 分钟内无限使用 GPT-4.
              </span>
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{ width: 200, height: 200, objectFit: "contain" }}
                src="/mini_wx_logo.jpg"
                alt="小程序二维码"
              />
            </div>
          </div>
        </List>

        <List>
          <div style={{ padding: "10px 20px 20px", boxSizing: "border-box" }}>
            <h3>
              使用教程（图片版）<span style={{ color: "#f63" }}>嘎嘎详细</span>
            </h3>

            <p>1. 在「微信小程序」中获取 Api Key </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 15px",
              }}
            >
              <img
                style={{ width: "30%", objectFit: "contain" }}
                src="/course_step1.png"
                alt="微信小程序获取 Api Key 步骤1"
              />
              <img
                style={{ width: "30%", objectFit: "contain" }}
                src="/course_step2.png"
                alt="微信小程序获取 Api Key 步骤2"
              />
              <img
                style={{ width: "30%", objectFit: "contain" }}
                src="/course_step3.png"
                alt="微信小程序获取 Api Key 步骤3"
              />
            </div>

            <p>2. 在「Chat2Hub」中使用 Api Key 解除 GPT-4 使用限制</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{
                  width: "100%",
                  padding: 20,
                }}
                src="/course_step4.png"
                alt="chat2hub 配置教程"
              />
            </div>
          </div>
        </List>
      </div>
    </div>
  );
}
