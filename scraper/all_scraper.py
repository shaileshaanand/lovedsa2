import bs4
import requests
import json

URL = "https://www.geeksforgeeks.org/practice-for-cracking-any-coding-interview/"


def fetch_page(url):
    response = requests.get(url)
    return bs4.BeautifulSoup(response.text, "html.parser")


# soup = fetch_page(URL)


def parse_page(soup):
    def parse_questions(question_element):
        questions = []
        for question in question_element:
            question_element = question.select("a")[0]
            question_url = question_element.get("href")
            question_title = question_element.text.strip()
            questions.append({"title": question_title, "url": question_url})
        return questions

    sections = []
    for head in soup.select(".text h3>p>a"):
        header_element = head.parent.parent
        questions_list = header_element.next_sibling

        if questions_list:
            questions = parse_questions(questions_list.select("li"))
            title = header_element.text.strip()
        else:
            title = head.parent.a.next_sibling.text.strip()
            title2 = head.parent.h3.text.strip()
            questions = parse_questions(head.parent.ol.select("li"))
        sections.append({"title": title if title else title2, "questions": questions})
    return sections[:-1]


if __name__ == "__main__":
    print(json.dumps(parse_page(fetch_page(URL)), indent=2))
