let jsdom = require("mocha-jsdom");
let { default: AuthHttpRequest, AntiCsrfToken } = require("../lib/build/index.js");
let assert = require("assert");
let Server = require("./server");
const BASE_URL = "http://localhost:8888";
let { delay, checkIfIdRefreshIsCleared } = require("./utils");

describe("Fetch AuthHttpRequest class tests", function() {
    jsdom({
        url: "http://localhost"
    });

    beforeEach(function() {
        AuthHttpRequest.initCalled = false;
        global.document = {};
        global.refreshCalled = false;
        global.noOfTimesRefreshCalledDuringTest = 0;
    });

    it("checking that methods exists", function(done) {
        assert.strictEqual(typeof AuthHttpRequest.doRequest, "function");
        assert.strictEqual(typeof AuthHttpRequest.attemptRefreshingSession, "function");
        assert.strictEqual(typeof AuthHttpRequest.get, "function");
        assert.strictEqual(typeof AuthHttpRequest.post, "function");
        assert.strictEqual(typeof AuthHttpRequest.delete, "function");
        assert.strictEqual(typeof AuthHttpRequest.put, "function");
        assert.strictEqual(typeof AuthHttpRequest.fetch, "function");
        done();
    });

    it("testing for init check in doRequest", async function() {
        let failed = false;
        try {
            await AuthHttpRequest.doRequest(async () => {});
            failed = true;
        } catch (err) {}

        if (failed) {
            throw Error("test failed");
        }
    });

    it("testing for init check in attemptRefreshingSession", async function() {
        let failed = false;
        try {
            await AuthHttpRequest.attemptRefreshingSession();
            failed = true;
        } catch (err) {}

        if (failed) {
            throw Error("test failed");
        }
    });

    it("testing api methods without config", async function() {
        let httpServer = await Server.createNew();

        try {
            AuthHttpRequest.init(`${BASE_URL}/refresh`);

            let getResponse = await AuthHttpRequest.get(`${BASE_URL}/testing`);
            let postResponse = await AuthHttpRequest.post(`${BASE_URL}/testing`);
            let deleteResponse = await AuthHttpRequest.delete(`${BASE_URL}/testing`);
            let putResponse = await AuthHttpRequest.put(`${BASE_URL}/testing`);
            let doRequestResponse = await AuthHttpRequest.fetch(`${BASE_URL}/testing`, { method: "GET" });
            getResponse = await getResponse.text();
            putResponse = await putResponse.text();
            postResponse = await postResponse.text();
            deleteResponse = await deleteResponse.text();
            doRequestResponse = await doRequestResponse.text();
            let expectedResponse = "success";

            assert.strictEqual(getResponse, expectedResponse);
            assert.strictEqual(putResponse, expectedResponse);
            assert.strictEqual(postResponse, expectedResponse);
            assert.strictEqual(deleteResponse, expectedResponse);
            assert.strictEqual(doRequestResponse, expectedResponse);
        } finally {
            httpServer.close();
        }
    });

    it("testing api methods with config", async function() {
        let httpServer = await Server.createNew();

        try {
            AuthHttpRequest.init(`${BASE_URL}/refresh`, 440, true);

            let testing = "testing";
            let getResponse = await AuthHttpRequest.get(`${BASE_URL}/${testing}`, { headers: { testing } });
            let postResponse = await fetch(`${BASE_URL}/${testing}`, { method: "post", headers: { testing } });
            let deleteResponse = await AuthHttpRequest.delete(`${BASE_URL}/${testing}`, { headers: { testing } });
            let putResponse = await AuthHttpRequest.put(`${BASE_URL}/${testing}`, { headers: { testing } });
            let doRequestResponse1 = await fetch(`${BASE_URL}/${testing}`, {
                method: "GET",
                headers: { testing }
            });
            let doRequestResponse2 = await AuthHttpRequest.fetch(`${BASE_URL}/${testing}`, {
                method: "GET",
                headers: { testing }
            });
            let getResponseHeader = getResponse.headers.get(testing);
            getResponse = await getResponse.text();
            let putResponseHeader = putResponse.headers.get(testing);
            putResponse = await putResponse.text();
            let postResponseHeader = postResponse.headers.get(testing);
            postResponse = await postResponse.text();
            let deleteResponseHeader = deleteResponse.headers.get(testing);
            deleteResponse = await deleteResponse.text();
            let doRequestResponseHeader1 = doRequestResponse1.headers.get(testing);
            doRequestResponse1 = await doRequestResponse1.text();
            let doRequestResponseHeader2 = doRequestResponse2.headers.get(testing);
            doRequestResponse2 = await doRequestResponse2.text();
            let expectedResponse = "success";

            assert.strictEqual(getResponse, expectedResponse);
            assert.strictEqual(getResponseHeader, testing);
            assert.strictEqual(putResponse, expectedResponse);
            assert.strictEqual(putResponseHeader, testing);
            assert.strictEqual(postResponse, expectedResponse);
            assert.strictEqual(postResponseHeader, testing);
            assert.strictEqual(deleteResponse, expectedResponse);
            assert.strictEqual(deleteResponseHeader, testing);
            assert.strictEqual(doRequestResponse1, expectedResponse);
            assert.strictEqual(doRequestResponseHeader1, testing);
            assert.strictEqual(doRequestResponse2, expectedResponse);
            assert.strictEqual(doRequestResponseHeader2, testing);
        } finally {
            httpServer.close();
        }
    });

    it("testing api methods that doesn't exists", async function() {
        let httpServer = await Server.createNew();

        try {
            AuthHttpRequest.init(`${BASE_URL}/refresh`);

            let getResponse = await AuthHttpRequest.get(`${BASE_URL}/fail`);
            let postResponse = await AuthHttpRequest.post(`${BASE_URL}/fail`);
            let deleteResponse = await AuthHttpRequest.delete(`${BASE_URL}/fail`);
            let putResponse = await AuthHttpRequest.put(`${BASE_URL}/fail`);
            let doRequestResponse1 = await AuthHttpRequest.fetch(`${BASE_URL}/fail`, { method: "GET" });
            let doRequestResponse2 = await AuthHttpRequest.fetch(`${BASE_URL}/fail`, { method: "GET" });
            let getResponseCode = getResponse.status;
            let putResponseCode = putResponse.status;
            let postResponseCode = postResponse.status;
            let deleteResponseCode = deleteResponse.status;
            let doRequestResponseCode1 = doRequestResponse1.status;
            let doRequestResponseCode2 = doRequestResponse2.status;
            let expectedStatusCode = 404;

            assert.strictEqual(getResponseCode, expectedStatusCode);
            assert.strictEqual(putResponseCode, expectedStatusCode);
            assert.strictEqual(postResponseCode, expectedStatusCode);
            assert.strictEqual(deleteResponseCode, expectedStatusCode);
            assert.strictEqual(doRequestResponseCode1, expectedStatusCode);
            assert.strictEqual(doRequestResponseCode2, expectedStatusCode);
        } finally {
            httpServer.close();
        }
    });

    it("refresh session", async function() {
        let httpServer = await Server.createNew();

        try {
            AuthHttpRequest.init(`${BASE_URL}/refresh`, 440, true);
            let userId = "testing-supertokens-website";
            let loginResponse = await fetch(`${BASE_URL}/login`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId })
            });
            let userIdFromResponse = await loginResponse.text();
            let cookies = loginResponse.headers._headers["set-cookie"];
            let sAccessTokenCookieFound = false;
            let sRefreshTokenCookieFound = false;
            let sIdRefreshTokenCookieFound = false;
            assert.strictEqual(Array.isArray(cookies), true);
            for (let i = 0; i < cookies.length; i++) {
                if (cookies[i].includes("sAccessToken=")) {
                    sAccessTokenCookieFound = true;
                } else if (cookies[i].includes("sRefreshToken")) {
                    sRefreshTokenCookieFound = true;
                } else if (cookies[i].includes("sIdRefreshToken")) {
                    sIdRefreshTokenCookieFound = true;
                }
            }
            if (!sAccessTokenCookieFound || !sRefreshTokenCookieFound || !sIdRefreshTokenCookieFound) {
                throw Error("");
            }
            assert.strictEqual(userId, userIdFromResponse);
            await delay(3);

            assert.strictEqual(refreshCalled, false);
            let getResponse = await fetch(`${BASE_URL}/`, { method: "GET" });
            assert.strictEqual(refreshCalled, true);
            getResponse = await getResponse.text();
            assert.strictEqual(getResponse, "success");
        } finally {
            httpServer.close();
        }
    });

    it("anti-csrf test with refresh session", async function() {
        let httpServer = await Server.createNew();

        try {
            AuthHttpRequest.init(`${BASE_URL}/refresh`);
            let userId = "testing-supertokens-website";
            let loginResponse = await AuthHttpRequest.post(`${BASE_URL}/login`, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId })
            });
            let userIdFromResponse = await loginResponse.text();
            let cookies = loginResponse.headers._headers["set-cookie"];
            let sAccessTokenCookieFound = false;
            let sRefreshTokenCookieFound = false;
            let sIdRefreshTokenCookieFound = false;
            assert.strictEqual(Array.isArray(cookies), true);
            for (let i = 0; i < cookies.length; i++) {
                if (cookies[i].includes("sAccessToken=")) {
                    sAccessTokenCookieFound = true;
                } else if (cookies[i].includes("sRefreshToken")) {
                    sRefreshTokenCookieFound = true;
                } else if (cookies[i].includes("sIdRefreshToken")) {
                    sIdRefreshTokenCookieFound = true;
                }
            }
            if (!sAccessTokenCookieFound || !sRefreshTokenCookieFound || !sIdRefreshTokenCookieFound) {
                throw Error("");
            }
            assert.strictEqual(userId, userIdFromResponse);

            assert.strictEqual(refreshCalled, false);
            window.localStorage.clear();
            AntiCsrfToken.removeToken();
            let getResponse = await AuthHttpRequest.get(`${BASE_URL}/`);
            assert.strictEqual(refreshCalled, true);
            getResponse = await getResponse.text();
            assert.strictEqual(getResponse, "success");
        } finally {
            httpServer.close();
        }
    });

    it("refresh session (multiple get call where access token is expired)", async function() {
        let httpServer = await Server.createNew(10);

        try {
            AuthHttpRequest.init(`${BASE_URL}/refresh`, 440, true);
            let userId = "testing-supertokens-website";
            let loginResponse = await fetch(`${BASE_URL}/login`, {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId })
            });
            let userIdFromResponse = await loginResponse.text();
            let cookies = loginResponse.headers._headers["set-cookie"];
            let sAccessTokenCookieFound = false;
            let sRefreshTokenCookieFound = false;
            let sIdRefreshTokenCookieFound = false;
            assert.strictEqual(Array.isArray(cookies), true);
            for (let i = 0; i < cookies.length; i++) {
                if (cookies[i].includes("sAccessToken=")) {
                    sAccessTokenCookieFound = true;
                } else if (cookies[i].includes("sRefreshToken")) {
                    sRefreshTokenCookieFound = true;
                } else if (cookies[i].includes("sIdRefreshToken")) {
                    sIdRefreshTokenCookieFound = true;
                }
            }
            if (!sAccessTokenCookieFound || !sRefreshTokenCookieFound || !sIdRefreshTokenCookieFound) {
                throw Error("");
            }
            assert.strictEqual(userId, userIdFromResponse);
            await delay(10);

            let startTime = Date.now();
            let promises = [];

            let N = 100;
            assert.strictEqual(refreshCalled, false);
            for (let i = 0; i < N; i++) {
                promises.push(fetch(`${BASE_URL}/`));
            }
            let responses = [];
            let result = [];
            for (let i = 0; i < N; i++) {
                responses.push(await promises[i]);
            }
            for (let i = 0; i < N; i++) {
                result.push(await responses[i].text());
            }
            let endTime = Date.now();
            assert.strictEqual(refreshCalled, true);
            assert.strictEqual(noOfTimesRefreshCalledDuringTest, 1);
            assert.strictEqual(endTime - startTime < 6000, true);
        } finally {
            httpServer.close();
        }
    });

    it("refresh is not called when calling main api before access token expiry", async function() {
        let httpServer = await Server.createNew(10);
        try {
            AuthHttpRequest.init(`${BASE_URL}/refresh`, 440, true);
            let userId = "testing-supertokens-website";
            let loginResponse = await fetch(`${BASE_URL}/login`, {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId })
            });
            let userIdFromResponse = await loginResponse.text();
            let cookies = loginResponse.headers._headers["set-cookie"];
            let sAccessTokenCookieFound = false;
            let sRefreshTokenCookieFound = false;
            let sIdRefreshTokenCookieFound = false;
            assert.strictEqual(Array.isArray(cookies), true);
            for (let i = 0; i < cookies.length; i++) {
                if (cookies[i].includes("sAccessToken=")) {
                    sAccessTokenCookieFound = true;
                } else if (cookies[i].includes("sRefreshToken")) {
                    sRefreshTokenCookieFound = true;
                } else if (cookies[i].includes("sIdRefreshToken")) {
                    sIdRefreshTokenCookieFound = true;
                }
            }
            if (!sAccessTokenCookieFound || !sRefreshTokenCookieFound || !sIdRefreshTokenCookieFound) {
                throw Error("");
            }
            assert.strictEqual(userId, userIdFromResponse);
            let response = await fetch(`${BASE_URL}/`);
            let responseText = await response.text();
            assert.strictEqual(responseText, "success");
            assert.strictEqual(refreshCalled, false);
            assert.strictEqual(noOfTimesRefreshCalledDuringTest, 0);
        } finally {
            httpServer.close();
        }
    });

    it("session should not exist after logout is called", async function() {
        let httpServer = await Server.createNew(10);
        try {
            AuthHttpRequest.init(`${BASE_URL}/refresh`, 440, true);
            let userId = "testing-supertokens-website";
            let loginResponse = await fetch(`${BASE_URL}/login`, {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId })
            });
            let userIdFromResponse = await loginResponse.text();
            let cookies = loginResponse.headers._headers["set-cookie"];
            let sAccessTokenCookieFound = false;
            let sRefreshTokenCookieFound = false;
            let sIdRefreshTokenCookieFound = false;
            assert.strictEqual(Array.isArray(cookies), true);
            for (let i = 0; i < cookies.length; i++) {
                if (cookies[i].includes("sAccessToken=")) {
                    sAccessTokenCookieFound = true;
                } else if (cookies[i].includes("sRefreshToken")) {
                    sRefreshTokenCookieFound = true;
                } else if (cookies[i].includes("sIdRefreshToken")) {
                    sIdRefreshTokenCookieFound = true;
                }
            }
            if (!sAccessTokenCookieFound || !sRefreshTokenCookieFound || !sIdRefreshTokenCookieFound) {
                throw Error("");
            }
            assert.strictEqual(userId, userIdFromResponse);

            let logoutResponse = await fetch(`${BASE_URL}/logout`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });
            let logoutText = await logoutResponse.text();
            assert.strictEqual(logoutText, "success");
            assert.strictEqual(checkIfIdRefreshIsCleared(), true);
        } finally {
            httpServer.close();
        }
    });

    it("test that apis that dont require authentication work after logout", async function() {
        let httpServer = await Server.createNew(10);
        try {
            AuthHttpRequest.init(`${BASE_URL}/refresh`, 440, true);
            let userId = "testing-supertokens-website";
            let loginResponse = await fetch(`${BASE_URL}/login`, {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId })
            });
            let userIdFromResponse = await loginResponse.text();
            let cookies = loginResponse.headers._headers["set-cookie"];
            let sAccessTokenCookieFound = false;
            let sRefreshTokenCookieFound = false;
            let sIdRefreshTokenCookieFound = false;
            assert.strictEqual(Array.isArray(cookies), true);
            for (let i = 0; i < cookies.length; i++) {
                if (cookies[i].includes("sAccessToken=")) {
                    sAccessTokenCookieFound = true;
                } else if (cookies[i].includes("sRefreshToken")) {
                    sRefreshTokenCookieFound = true;
                } else if (cookies[i].includes("sIdRefreshToken")) {
                    sIdRefreshTokenCookieFound = true;
                }
            }
            if (!sAccessTokenCookieFound || !sRefreshTokenCookieFound || !sIdRefreshTokenCookieFound) {
                throw Error("");
            }
            assert.strictEqual(userId, userIdFromResponse);

            let logoutResponse = await fetch(`${BASE_URL}/logout`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });
            let logoutText = await logoutResponse.text();
            assert.strictEqual(logoutText, "success");

            let pingResponse = await fetch(`${BASE_URL}/ping`);
            let pingText = await pingResponse.text();
            assert.strictEqual(pingText, "success");
        } finally {
            httpServer.close();
        }
    });

    it("test that user info after logout returns session expired", async function() {
        let httpServer = await Server.createNew(10);
        try {
            AuthHttpRequest.init(`${BASE_URL}/refresh`, 440, true);
            let userId = "testing-supertokens-website";
            let loginResponse = await fetch(`${BASE_URL}/login`, {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userId })
            });
            let userIdFromResponse = await loginResponse.text();
            let cookies = loginResponse.headers._headers["set-cookie"];
            let sAccessTokenCookieFound = false;
            let sRefreshTokenCookieFound = false;
            let sIdRefreshTokenCookieFound = false;
            assert.strictEqual(Array.isArray(cookies), true);
            for (let i = 0; i < cookies.length; i++) {
                if (cookies[i].includes("sAccessToken=")) {
                    sAccessTokenCookieFound = true;
                } else if (cookies[i].includes("sRefreshToken")) {
                    sRefreshTokenCookieFound = true;
                } else if (cookies[i].includes("sIdRefreshToken")) {
                    sIdRefreshTokenCookieFound = true;
                }
            }
            if (!sAccessTokenCookieFound || !sRefreshTokenCookieFound || !sIdRefreshTokenCookieFound) {
                throw Error("");
            }
            assert.strictEqual(userId, userIdFromResponse);

            let logoutResponse = await fetch(`${BASE_URL}/logout`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });
            let logoutText = await logoutResponse.text();
            assert.strictEqual(logoutText, "success");

            let failed = false;
            try {
                await fetch(`${BASE_URL}/`);
                failed = true;
            } catch (e) {
                if (e.status === undefined || e.status !== 440) {
                    failed = true;
                }
            }

            assert.strictEqual(failed, false);
        } finally {
            httpServer.close();
        }
    });

    it("test that custom headers are being sent", async function() {
        let httpServer = await Server.createNew(10);
        try {
            AuthHttpRequest.init(`${BASE_URL}/refresh`, 440, true);
            let response = await fetch(`${BASE_URL}/testHeader`, {
                headers: {
                    "st-custom-header": "st"
                }
            });
            let responseText = await response.text();
            let responseJSON = JSON.parse(responseText);
            assert.strictEqual(responseJSON.success, true);
        } finally {
            httpServer.close();
        }
    });
});
