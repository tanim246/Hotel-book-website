const selectRoom = document.getElementById("selectRoom");


function handleclick(data) {
  const div = document.createElement("div");

  // const title = data.querySelector().innerText;
  // const location = data.querySelector().innerText;
  // const price = data.querySelector().innerText;
  // const category = data.querySelector().innerText;
  

  div.innerHTML = `
            <div class="flex justify-between">
              <h1 class="font-semibold">Sea View Standard</h1>
              <p class="font-semibold text-[#0014A9]">3,000 tk</p>
            </div>
            <div>
              <p>Cox's Bazar</p>
              <p
                class="text-[12px] w-[60px] mt-2 bg-sky-200 px-[6px] rounded-lg text-sky-900"
              >
                Standard
              </p>
            </div> 
`;
  
  selectRoom.appendChild(div);
}
