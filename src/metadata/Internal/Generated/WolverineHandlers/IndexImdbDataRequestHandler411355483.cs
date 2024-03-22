// <auto-generated/>
#pragma warning disable
using Metadata.Features.Configuration;
using Microsoft.Extensions.Logging;

namespace Internal.Generated.WolverineHandlers
{
    // START: IndexImdbDataRequestHandler411355483
    public class IndexImdbDataRequestHandler411355483 : Wolverine.Runtime.Handlers.MessageHandler
    {
        private readonly Metadata.Features.Configuration.PostgresConfiguration _postgresConfiguration;
        private readonly Microsoft.Extensions.Logging.ILogger<Metadata.Features.ImportImdbData.ImdbDbService> _logger2;
        private readonly Microsoft.Extensions.Logging.ILogger<Metadata.Features.IndexImdbData.IndexImdbDataRequestHandler> _logger1;

        public IndexImdbDataRequestHandler411355483(Metadata.Features.Configuration.PostgresConfiguration postgresConfiguration, Microsoft.Extensions.Logging.ILogger<Metadata.Features.ImportImdbData.ImdbDbService> __logger2, Microsoft.Extensions.Logging.ILogger<Metadata.Features.IndexImdbData.IndexImdbDataRequestHandler> __logger1)
        {
            _postgresConfiguration = postgresConfiguration;
            _logger2 = __logger2;
            _logger1 = __logger1;
        }



        public override async System.Threading.Tasks.Task HandleAsync(Wolverine.Runtime.MessageContext context, System.Threading.CancellationToken cancellation)
        {
            var imdbDbService = new Metadata.Features.ImportImdbData.ImdbDbService(_postgresConfiguration, _logger2);
            var indexImdbDataRequestHandler = new Metadata.Features.IndexImdbData.IndexImdbDataRequestHandler(_logger1, imdbDbService);
            // The actual message body
            var indexImdbDataRequest = (Metadata.Features.IndexImdbData.IndexImdbDataRequest)context.Envelope.Message;

            
            // The actual message execution
            var outgoing1 = await indexImdbDataRequestHandler.Handle(indexImdbDataRequest, cancellation).ConfigureAwait(false);

            
            // Outgoing, cascaded message
            await context.EnqueueCascadingAsync(outgoing1).ConfigureAwait(false);

        }

    }

    // END: IndexImdbDataRequestHandler411355483
    
    
}

