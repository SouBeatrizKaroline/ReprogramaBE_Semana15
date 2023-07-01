const memoryModel = require("../src/models/memoryModel")

describe("GET model test", () => {
    const memory = new memoryModel({
        "title": "memória teste",
        "date": "2022-07-01T17:42:09.375Z",
        "description": "uma memória implantada para testes",
        "category": "testes",
        "imgURL": "https://www.imagem.com",
        "timelineID": "62bf30a95bd3be0daadb34f3",
        "archived": true
    });
    it("Deve chamar o schema e retornar o nome correto da memória", () => {
        expect(memory.title).toBe("memória teste");
    });
    it("Deve chamar o schema e retornar a data correta da memória", () => {
        expect(JSON.stringify(memory.date).substring(1, (JSON.stringify(memory.date)).length - 1)).toBe("2022-07-01T17:42:09.375Z")
    });
}
)