export async function getListOnApi() {
  return new Promise((resolve) => {
    resolve([{
      id: 1,
      titulo: 'item 1',
      linkImg: "link"
    },
    {
      id: 2,
      titulo: 'item 2',
      linkImg: "link"
    },
    {
      id: 3,
      titulo: 'item 3',
      linkImg: "link"
    }])
  })
}