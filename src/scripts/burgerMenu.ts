const Menu = () => {
  const menu = document.querySelector(".menu") as HTMLDivElement;
  const menuBar1 = document.querySelector(".menu_bar1") as HTMLDivElement;
  const menuBar2 = document.querySelector(".menu_bar2") as HTMLDivElement;
  const menuBar3 = document.querySelector(".menu_bar3") as HTMLDivElement;
  const sidebar = document.querySelector(".sidebar") as HTMLDivElement;
  const sidebarel = document.querySelectorAll(
    ".sidebarel"
  ) as NodeListOf<HTMLDivElement>;

  const closeSidebar = () => {
    menu.style.backgroundColor = "transparent";
    menuBar1.style.backgroundColor = "#f6f8fe";
    menuBar2.style.backgroundColor = "#f6f8fe";
    menuBar3.style.backgroundColor = "#f6f8fe";
    sidebarel.forEach((el, i) => {
      el.style.transition = "all 0.3s 0.5s 0.5s";
      el.style.opacity = "1";
      setTimeout(() => {
        el.style.display = "none";
      }, 150);
    });
    sidebar.style.width = "0";
    menu.dataset.toggle = "open";
    menuBar1.style.width = "50%";
    menuBar1.style.transform = "translate(-100%, -11.5px)";
    menuBar1.style.transformOrigin = "100% 0";
    menuBar2.style.width = "100%";
    menuBar2.style.transform = "translate(-50%, 0.4px)";
    menuBar3.style.width = "50%";
    menuBar3.style.transform = "translate(0, 11.5px)";
    menuBar3.style.transformOrigin = "0 100%";
  };

  const openSidebar = () => {
    menu.style.backgroundColor = "#159bfc";
    menuBar1.style.backgroundColor = "#f6f8fe";
    menuBar2.style.backgroundColor = "#f6f8fe";
    menuBar3.style.backgroundColor = "#f6f8fe";
    sidebarel.forEach((el, i) => {
      el.style.display = "none";
      setTimeout(() => {
        el.style.transition = "all 0.3s 0";
        el.style.display = "flex";
        el.style.opacity = "1";
      }, 100);
    });
    sidebar.style.width = "min(350px, 100vw)";
    menu.dataset.toggle = "close";
    menuBar1.style.width = "100%";
    menuBar1.style.transform = "translate(-66%, -11.5px) rotate(-45deg)";
    menuBar2.style.width = "0";
    menuBar3.style.width = "100%";
    menuBar3.style.transform = "translate(-35%, -12.5px) rotate(45deg)";
  };

  menu.dataset.toggle === "open" ? openSidebar() : closeSidebar();
};

export { Menu };
