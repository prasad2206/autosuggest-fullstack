
using System.Linq;
using autosuggest_api.Models;

namespace autosuggest_api.Data
{
    public static class DbInitializer
    {
        public static void Seed(ApplicationDbContext context)
        {
            if (context.Suggestions.Any()) return;

            var items = new[]
            {
                "react","react hooks","react router","redux","javascript","typescript",
                "node js","express","mongodb","sql server","c# .net","asp.net core",
                "entity framework","docker","kubernetes","aws","gcp","azure","graphql",
                "nextjs","vite","tailwind css","jest","cypress","postgresql","mysql",
                "redis","rabbitmq","microservices","ci cd","github actions","fastapi",
                "python","django","terraform","prometheus","grafana","elasticsearch",
                "logstash","kibana","unit testing","integration testing","selenium",
                "playwright","openai","github copilot","claude","prompt engineering",
                "autocomplete","autosuggest","fuzzy search","levenshtein"
            };

            context.Suggestions.AddRange(items.Select(i => new Suggestion { Text = i }));
            context.SaveChanges();
        }
    }
}




