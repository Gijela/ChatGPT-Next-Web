import styles from "./sub-scribe.module.scss";
import { IconButton } from "./button";
import { useNavigate } from "react-router-dom";
import { Path } from "../constant";
import CloseIcon from "../icons/close.svg";
import { List, ListItem, Modal } from "./ui-lib";
import { useState } from "react";

interface IDonateItem {
  key: string;
  title: string;
  subTitle: string;
  price: number;
}

const subPriceConfig: IDonateItem[] = [
  {
    key: "quarter",
    title: "体验卡",
    subTitle: "体验使用 15 分钟 gpt4，新增绘画功能",
    price: 0.1,
  },
  {
    key: "day",
    title: "日卡",
    subTitle: "解除 gpt4 次数限制一天，新增绘画功能",
    price: 3,
  },
  {
    key: "week",
    title: "周卡",
    subTitle: "解除 gpt4 次数限制一周，新增绘画功能",
    price: 15,
  },
  {
    key: "month",
    title: "月卡",
    subTitle: "解除 gpt4 次数限制一个月，新增绘画功能",
    price: 50,
  },
];

function WxDonateBtn() {
  return (
    <div>
      <button
        className="button_icon-button__VwAMf undefined undefined undefined  clickable button_primary__dwYZ6"
        role="button"
      >
        <div className="button_icon-button-icon__AMZta no-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className="wechat_svg__icon"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#69BB64"
              d="M695.296 346.112c11.776 0 23.552 1.024 34.816 2.048C698.88 201.728 542.208 93.184 363.52 93.184 163.84 93.184 0 229.376 0 401.92c0 99.84 54.272 181.76 145.408 245.248l-36.352 109.056 126.976-63.488c45.568 9.216 81.92 18.432 127.488 18.432 11.264 0 22.528-.512 33.792-1.536-7.168-24.064-11.264-49.664-11.264-76.288.512-158.208 136.704-287.232 309.248-287.232zM497.664 240.64c31.232 0 56.32 25.088 56.32 56.32s-25.088 56.32-56.32 56.32-56.32-25.088-56.32-56.32 25.088-56.32 56.32-56.32zM243.2 353.792c-31.232 0-56.32-25.088-56.32-56.32s25.088-56.32 56.32-56.32 56.32 25.088 56.32 56.32-25.088 56.32-56.32 56.32zm781.312 276.992c0-145.408-145.408-263.68-308.736-263.68-173.056 0-309.248 118.272-309.248 263.68s136.192 263.68 309.248 263.68c36.352 0 72.704-9.216 109.056-18.432l99.84 54.784-27.136-90.624c72.704-54.784 126.976-127.488 126.976-209.408zm-403.456-40.96c-22.016 0-39.936-17.92-39.936-39.936s17.92-39.936 39.936-39.936 39.936 17.92 39.936 39.936-17.92 39.936-39.936 39.936zm199.68 2.56c-22.016 0-39.936-17.92-39.936-39.936s17.92-39.936 39.936-39.936 39.936 17.92 39.936 39.936-17.92 39.936-39.936 39.936z"
            ></path>
          </svg>
        </div>
        <div className="button_icon-button-text__my76e">微信捐赠</div>
      </button>
    </div>
  );
}

function DonateModal(props: {
  donateInfo: IDonateItem;
  showModal: (flag: boolean) => void;
}) {
  return (
    <div
      className="modal-mask"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
    >
      <Modal
        title={"请确定您有捐赠意愿"}
        onClose={() => props.showModal(false)}
      >
        <p>
          捐献金额：
          <span style={{ color: "red" }}>￥{props.donateInfo.price}</span>
        </p>
        <p style={{ color: "red" }}>
          注意：捐献时请在「备注」中添加您的「邮箱」来接收解除限制的令牌密钥~
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <img
            style={{ width: 300, height: 300, objectFit: "contain" }}
            src="/QR-code.jpg"
            alt="二维码"
          />
          <img
            style={{ width: 300, height: 300, objectFit: "contain" }}
            src="/pay-demo.jpg"
            alt="付款演示"
          />
        </div>
      </Modal>
    </div>
  );
}

export function Subscribe() {
  const navigate = useNavigate();
  const [activeDonateType, setActiveDonateType] = useState<number>(-1);
  const [openDonateModal, setOpenDonateModal] = useState<boolean>(false);

  const updateDonateModalState = (state: boolean) => setOpenDonateModal(state);

  const handleClickDonateBtn = (donateType: number) => {
    setActiveDonateType(donateType);
    setOpenDonateModal(true);
  };

  return (
    <div className={styles["sub-scribe"]}>
      <div
        className="window-header"
        style={{ width: "100%", boxSizing: "border-box" }}
        data-tauri-drag-region
      >
        <div className="window-header-title">
          <div className="window-header-main-title">自助订阅</div>
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

      <div className={styles["sub-content"]}>
        <List>
          {subPriceConfig.map((item, index) => (
            <ListItem
              key={index}
              className={styles["sub-listItem"]}
              title={item.title}
              subTitle={item.subTitle}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "end",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    minWidth: 60,
                    marginBottom: 10,
                  }}
                >
                  <div>￥</div>
                  <div style={{ fontSize: "30px", marginBottom: "-7px" }}>
                    {item.price}
                  </div>
                </div>
                <div onClick={() => handleClickDonateBtn(index)}>
                  <WxDonateBtn />
                </div>
                {openDonateModal && activeDonateType === index && (
                  <DonateModal
                    donateInfo={item}
                    showModal={updateDonateModalState}
                  />
                )}
              </div>
            </ListItem>
          ))}
        </List>

        <List>
          <div style={{ padding: "10px 20px", boxSizing: "border-box" }}>
            <p>
              上面可以自助订阅，订阅成功后会将您的专属信息发送到您的邮箱。如果失败，请加微信联系我。
            </p>
            <p>
              网站目前有一定GPT-4的额度，为感谢捐赠者，捐赠金额达到以下金额的用户，可以解除相应次数限制。
            </p>
            <ul>
              <li>
                网站用量充足的情况下，通过捐赠获取的权限在有效期内使用，如果有问题请微信联系我
              </li>
              <li>
                仅限个人使用，禁止商业用途，禁止滥用，禁止以此盈利发现违规行为将封禁处理
              </li>
              <li>
                本服务是提供给捐赠用户的一个福利，请确保自己有捐赠意愿。如果您只是想获取4.0权限请去其它站点购买，本平台不提供任何销售服务
              </li>
            </ul>
            <p style={{ color: "#f63", fontWeight: 500 }}>
              用户在平台上的任何付款行为，均视为对网站的捐赠行为，并不与本服务构成交易，也不存在任何法律意义上的合同或契约关系。
              请确保您有捐赠意愿，如果您是想购买GPT-4权限，请勿捐赠,自行寻找其他站点购买。
            </p>
            <p>订阅后如果有需要，请添加微信联系我</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{ width: 300, height: 300, objectFit: "contain" }}
                src="/wx-card.jpg"
                alt="微信二维码名片"
              />
            </div>
          </div>
        </List>

        <List>
          <div style={{ padding: "10px 20px", boxSizing: "border-box" }}>
            <h3>网站免责声明</h3>
            <p>
              使用者必须在遵循 OpenAI 的
              <a
                href="https://openai.com/policies/terms-of-use"
                target="_blank"
              >
                使用条款
              </a>
              以及
              <strong>法律法规</strong>的情况下使用网站，不得用于非法用途。
            </p>
            <p>
              根据
              <a
                href="http://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm"
                target="_blank"
              >
                《生成式人工智能服务管理暂行办法》
              </a>
              的要求，请勿对中国地区公众提供一切未经备案的生成式人工智能服务。
            </p>
            <p>
              请注意以下条款和条件，以规避您的风险和损失。如果您不同意本声明，请立即离开本网站。如果您继续访问和使用本网站，则表示您已经
              阅读、理解并同意接受本声明的所有条款和条件
            </p>
            <ol>
              <li>
                本网站所提供的任何内容和服务仅供用户个人学习、研究和测试之用，不得作为商业用途。本网站所有信息未来可能会随时更新和更改，不保证其准确性、完整性、及时性、适用心稳定性和可靠性
              </li>
              <li>
                本网站提供的各种服务可能会由于技术故障、冈络状况、通讯线路等各种原因而受到影响，使用户法正常使用服务。对于因此造成的
                任何损失或者责任，本网站概不负责
              </li>
              <li>
                本网站内所有文章、评论、资料和信息等均为月户自行发布和创作，不代表本网站立场。用户应对更用该等信息所产生的风险和后果自行承担。对于任何因使用本网站所提供的信息利服务而导致的任何直接或间接损失，本网站概不负责
              </li>
              <li>
                用户应当遵守中华人民共和国的相关法律法规不得利用本网站进行任何违反法律法规的活动。如因用户违反法律法规而导致的一切后果，用户应独立承担相应的责任和后果，并赔偿因此产生的全部费用和损失。
              </li>
              <li>
                本网站不对用户在本网站上发布的任何内容、评论、言论、图片等内容的真实性、合法性、准确性完整性、可靠性和及时性做出任何保证。用户应对其发布的内容自行进行审核和张证，如有错误、虚假、侵犯他人权益等情况，用户立承担相应的法律责任并赔偿因此给本网站及他人造成的一切损失
              </li>
              <li>
                本网站所提供的链接仅供用户方便浏览之用，与本网站无关。链接所指向的网页内容及其可用性均由其网站运营者负责。本网站不对链接所指向的网站的内容、准确性、及时性、完整性、合法性、信用等作任何保证和承诺，不对其产生的任何损失或责任承担任何法律责任。
              </li>
              <li>
                在任何情况下，本网站不对用户使用本网站所导致的任何直接、间接、特殊、附带的损害或任何其他形式的损失承担任何责任，包括但不限于利润损失、商业中断、信息损失等。
              </li>
              <li>
                用户应当妥善保管自己的账号和密码，不得将其转让、出租、出借等。如因用户泄露账号和密码而导致的一切风险和损失均由用户自行承担。如有发现他人未经授权而使用用户的账号和密码登录本网站，用户应立即通知本网站。
              </li>
              <li>
                本网站有权随时更改和更新本声明内容，并在网站上发布更新版本。用户应在每次访问本网站时查看本声明是否有更新。
              </li>
              <li>
                如果本免责声明中的任何条款被认定为无效或不可执行，该条款应被视为被撤销，而不影响其他条款的有效性和可执行性
              </li>
              <li>
                在使用本网站的过程中，用户应当遵守互联网相关规定、中国法律法规及相关国际惯例。因用户违反上述规定而导致的一切后果，用户应独立承担相应的责任和后果，并赔偿因此产生的全部费用和损失。
              </li>
              <li>
                本网站不对用户因在本网站获取到的任何信息、资料、建议、服务等造成的直接、间接、特殊、附带的损害或任何其他形式的损失承担任何责任。
              </li>
              <li>
                用户在使用本网站时，应遵守公席良俗，不得发布含有诽谤、侮辱、色情、暴力等不良信息的内容，任何违反法律、道德、伦理规范比行为均由用户自行承担责任。
              </li>
              <li>
                用户对于本网站的使用应遵守以下原则：
                <ul>
                  <li>不干扰或破坏本网站的正常运行</li>
                  <li>不侵犯本网站及其他用户的合法权益</li>
                  <li>不利用本网站进行任何非法活动</li>
                  <li>不传播涉及计算机病毒或其他恶意代码的信息</li>
                  <li>不从事任何可能妨碍本网站运营或损害本网站的活动</li>
                </ul>
              </li>
              <li>
                本网站有权在任何时间内修改并更新本免责声明的条款。用户应每次访问本网站前查看本声明是否有更新，如用户不同意本声明的任何
                条款，请立即停止使用本网站。
              </li>
            </ol>
          </div>
        </List>
      </div>
    </div>
  );
}
