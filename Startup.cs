using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using Capstone_Connect.Data;
using Microsoft.AspNetCore.Authentication;
using Capstone_Connect.Handler;
using Microsoft.AspNetCore.Authentication.OAuth;

namespace Capstone_Connect
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<CapstoneConnectDBContext>(options => options.UseSqlite(Configuration.GetConnectionString("Capstone_ConnectConnection")));
            services.AddControllers();
            services.AddScoped<ICapstoneConnectRepo, DBCapstoneConnectRepo>();
            services.AddAuthentication().
            AddScheme<AuthenticationSchemeOptions, AuthHandler>
            ("MyAuthentication", null).
            Services.AddAuthorization(options =>
            {
                options.AddPolicy("UserOnly", policy => policy.RequireClaim("Email"));
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            app.UseHttpsRedirection();

            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
