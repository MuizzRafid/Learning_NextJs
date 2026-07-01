# difference between catch-all-routes vs optional-catch-all-routes

catch all routes
// here i must to give the next segment i don't give it will show 404

optional-catch-all-routes
//if i don't give the next segment it will return undefine if i console the slug..and work fine

# useEffect data fetching

Purpose: Fetch data when a component mounts.
Steps

1. Create state: data and loading.
2. Create an async function (e.g., fetchProducts()).
3. Set loading to true before the request.
4. Fetch data using await fetch(url).
5. Convert response with await response.json().
6. Save data using setData(...).
7. Handle errors with try...catch.
8. Stop loading in finally using setIsLoading(false).
9. Call the function inside useEffect(() => { fetchProducts(); }, []).
10. Render loading UI or mapped data.
    Best Practices
    • Keep fetch logic in a separate async function.
    • Use try...catch...finally.
    • Use [] dependency array to run once on mount.
    • Never make useEffect itself async.
    • Update state only after successful response.
    Common Mistakes
    • Making useEffect async.
    • Forgetting await.
    • Forgetting response.json().
    • Forgetting the dependency array.
    • Not resetting loading state.
