import bs4
import requests
import json

URL = "https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe"


def fetch_page(url):
    response = requests.get(url)
    return bs4.BeautifulSoup(response.text, "html.parser")


def parse_page(soup):
    def parse_questions(question_element):
        questions = []
        for question in question_element:
            question_element = question.select("a")[0]
            question_url = question_element.get("href")
            question_title = question_element.text.strip()
            questions.append({"title": question_title, "url": question_url})
        return questions

    for div in soup.find_all("div", {"id": "extraAd"}):
        div.decompose()

    sections = []
    for head in soup.select(".text h3 > a"):
        header_element = head.parent
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


print(json.dumps(parse_page(fetch_page(URL)), indent=2))
