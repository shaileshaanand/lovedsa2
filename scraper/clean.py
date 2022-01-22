import json

# from matplotlib.pyplot import title


import aiohttp
import asyncio

FILENAME = "all.json"
with open(FILENAME, "r") as f:
    data = json.load(f)


async def get_final_url(session, question):
    async with session.get(question["url"]) as resp:
        final_url = str(resp.url)
        if question["url"] != final_url:
            print(question["url"], "changed")
            print(final_url)
            question["url"] = final_url

        return question


async def main():
    result = []
    for section in data:
        async with aiohttp.ClientSession() as session:

            tasks = []
            for question in section["questions"]:
                # url = f"https://pokeapi.co/api/v2/pokemon/{number}"
                tasks.append(asyncio.ensure_future(get_final_url(session, question)))

            final_questions = await asyncio.gather(*tasks)
            # for pokemon in final_questions:
            #     print(pokemon)
            result.append(
                {"title": section["title"], "questions": list(final_questions)}
            )
    with open("clean_all.json", "w") as f:
        json.dump(result, f)


asyncio.run(main())
