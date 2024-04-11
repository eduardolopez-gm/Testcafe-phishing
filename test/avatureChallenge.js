import { Selector } from "testcafe";
fixture("Avature Challenge").page(
  "https://codility-frontend-prod.s3.amazonaws.com/media/task_static/qa_search/6f03f4361b080eeb747193aadd94cd2b/static/attachments/reference_page.html"
);

const inputField = Selector("#search-input");
const searchButton = Selector("#search-button");
const resultList = Selector("#search-results");
const emptyQuery = Selector("#error-empty-query");
const noresult = Selector("#error-no-results");

test("show an error message when trying to search without a value", async (t) => {
  await t
    .click(searchButton)
    .expect(emptyQuery.exists)
    .ok()
    .expect(emptyQuery.innerText)
    .eql("Provide some query");
});
test("display a no result message when trying to search for a value that does not exist", async (t) => {
  await t
    .typeText(inputField, "test")
    .click(searchButton)
    .expect(noresult.exists)
    .ok()
    .expect(noresult.innerText)
    .eql("No results");
});
test("display a list of results when trying to search for a value that has more than one occurrence", async (t) => {
  await t
    .typeText(inputField, "isla")
    .click(searchButton)
    .expect(resultList.exists)
    .ok()
    .expect(resultList.child().count).eql(4)
});
test("display one resultswhen trying to search for a value that has one occurrence", async (t) => {
  await t
    .typeText(inputField, "port")
    .click(searchButton)
    .expect(resultList.exists)
    .ok()
    .expect(resultList.child().count)
    .eql(1);
});
