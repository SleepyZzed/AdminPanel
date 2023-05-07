export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Aang",
      img: "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg",
      status: "active",
      email: "Aang@gmail.com",
      age: 112,
    },
    {
      id: 2,
      username: "Sokka",
      img: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Sokka.Avatar-The-Last-Airbender.webp",
      email: "Sokka@gmail.com",
      status: "passive",
      age: 16,
    },
    {
      id: 3,
      username: "Katara",
      img: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Katara.Avatar-The-Last-Airbender.webp",
      email: "Katara@gmail.com",
      status: "pending",
      age: 16,
    },
    {
      id: 4,
      username: "Toph",
      img: "https://static.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png",
      email: "Toph@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Zuko",
      img: "https://static.wikia.nocookie.net/deathbattlefanon/images/8/87/Prince_Zuko_%28Avatar%29.png",
      email: "Zuko@gmail.com",
      status: "passive",
      age: 18,
    },
    {
      id: 6,
      username: "Ozai",
      img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/07/Lord-Ozai-Feature-Image.jpg",
      email: "Ozai@gmail.com",
      status: "active",
      age: 65,
    },
    {
      id: 7,
      username: "Azula",
      img: "https://steamuserimages-a.akamaihd.net/ugc/1786218869914536967/D74F2392CA661CEB1E3DFDEBE8DA38E5E45D31F2/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      email: "Azula@gmail.com",
      status: "passive",
      age: 16,
    },
    {
      id: 8,
      username: "Roku",
      img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/106d9807-4e30-46cc-bd3c-0f6f14597fb9/df4hy9j-20988ebf-a189-4af6-8bad-5822512ac05a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEwNmQ5ODA3LTRlMzAtNDZjYy1iZDNjLTBmNmYxNDU5N2ZiOVwvZGY0aHk5ai0yMDk4OGViZi1hMTg5LTRhZjYtOGJhZC01ODIyNTEyYWMwNWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.y2a2fxUmDxA1TzFQunV9hNEsfOmiwH2x3DjJzC05Oo8",
      email: "Roku@gmail.com",
      status: "active",
      age: 99,
    },
    {
      id: 9,
      username: "Kyoshi",
      img: "https://staticc.sportskeeda.com/editor/2023/04/7ff4b-16818509432448-1920.jpg?w=840",
      email: "Kyoshi@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 10,
      username: "MoonGirl",
      img: "https://static.wikia.nocookie.net/avatar/images/9/9d/Kind_Yue.png",
      email: "MoonGirl@gmail.com",
      status: "active",
      age: 17,
    },
  ];