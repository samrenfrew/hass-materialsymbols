const DOMAIN = "materialsymbols";

const ICON_STORE = {};

const PREFIXES = {
  mso: "outlined",
  msr: "rounded",
  mss: "sharp",
};

const preProcessIcon = async (iconSet, iconName) => {
  const [icon, format] = iconName.split("#");
  const data = await fetch(`/${DOMAIN}/icons/${iconSet}/${icon}.svg`);
  const text = await data.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, "text/html");

  if (!doc || !doc.querySelector("svg")) return {};

  const viewBox = doc.querySelector("svg").getAttribute("viewBox");
  const _paths = doc.querySelectorAll("path");
  const paths = {};
  let path = "";
  for (const pth of _paths) {
    path = path + pth.getAttribute("d");
    const cls = pth.classList[0];
  }

  return { viewBox, path, paths, format };
};

const getIcon = (iconSet, iconName) => {
  return new Promise(async (resolve, reject) => {
    const icon = `${iconSet}:${iconName}`;
    if (ICON_STORE[icon]) resolve(ICON_STORE[icon]);

    ICON_STORE[icon] = preProcessIcon(iconSet, iconName);

    resolve(ICON_STORE[icon]);
  });
};

const getIconList = async (iconSet) => {
  const data = await fetch(`/${DOMAIN}/list/${iconSet}`);
  const text = await data.text();
  return JSON.parse(text);
};

// window.getIconList = getIconList;
// window.getIcon = getIcon;

if (!("customIcons" in window)) {
  window.customIcons = {};
}

window.customIcons["ms"] = {
  getIcon: (iconName) => getIcon("outlined", iconName),
  getIconList: () => getIconList("outlined"),
};
window.customIcons["msr"] = {
  getIcon: (iconName) => getIcon("rounded", iconName),
  getIconList: () => getIconList("rounded"),
};
window.customIcons["mss"] = {
  getIcon: (iconName) => getIcon("sharp", iconName),
  getIconList: () => getIconList("sharp"),
};
